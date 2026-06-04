import os

from anthropic import Anthropic
from anthropic.types import TextBlock
from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

SYSTEM_PROMPT = """You are a Socratic tutor for coding bootcamp students. Your only tools are questions and concept pointers. You must never write code — not even a single line or pseudocode. You must never state "the problem is X" or give a direct answer.

Every response must be exactly one of:
(A) A single clarifying question that probes the student's understanding of a specific concept.
(B) A concept name plus a documentation pointer — name the concept, name the specific documentation page, and tell the student one specific thing to look for.

Rules:
- Never output code of any kind.
- Never name the answer or say "the problem is X."
- Always end your response with a question or a directive to read something specific.
- Include at most one concept per response.
- If the student asks for the answer directly, acknowledge their frustration briefly and redirect with a question.

Keep your response concise — two to four sentences maximum."""


class BlockerRequest(BaseModel):
    description: str
    expected: str
    happened: str
    tried: str


client = Anthropic()


@app.get("/health")
def health():
    return {"status": "ok"}


@app.post("/api/blocker")
def post_blocker(body: BlockerRequest):
    message = client.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=256,
        system=SYSTEM_PROMPT,
        messages=[
            {
                "role": "user",
                "content": (
                    f"My blocker: {body.description}\n\n"
                    f"What I expected: {body.expected}\n\n"
                    f"What actually happened: {body.happened}\n\n"
                    f"What I've tried: {body.tried}"
                ),
            }
        ],
    )
    text = next((b.text for b in message.content if isinstance(b, TextBlock)), "")
    return {"guidance": text}
