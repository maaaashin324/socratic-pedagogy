import { useEffect, useRef, useState } from 'react'

const FIELDS = [
  { id: 'expected', label: 'What did you expect?' },
  { id: 'happened', label: 'What actually happened?', hint: '(paste your error message here if you have one)' },
  { id: 'tried', label: 'What have you already tried?' },
]

function BlockerDetail({ submission, onGuidance }) {
  const [values, setValues] = useState({ expected: '', happened: '', tried: '' })
  const [loading, setLoading] = useState(false)

  const canSubmit = FIELDS.every(f => values[f.id].trim()) && !loading

  function handleChange(id, value) {
    setValues(prev => ({ ...prev, [id]: value }))
  }

  async function handleSubmit() {
    setLoading(true)
    const userMsg =
      `My blocker: ${submission}\n\n` +
      `What I expected: ${values.expected}\n\n` +
      `What actually happened: ${values.happened}\n\n` +
      `What I've tried: ${values.tried}`
    try {
      const res = await fetch('/api/dialogue', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [{ role: 'user', content: userMsg }] }),
      })
      const data = await res.json()
      onGuidance(userMsg, data.guidance)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <h1 className="text-3xl font-semibold text-gray-900 mb-2">
        Let's break it down.
      </h1>
      <p className="text-gray-500 mb-6">
        Answer the three questions below to help structure your thinking.
      </p>

      <div className="bg-gray-100 rounded-lg p-4 mb-8">
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
          Your blocker
        </p>
        <p className="text-gray-700 text-sm">{submission}</p>
      </div>

      <div className="space-y-6">
        {FIELDS.map(({ id, label, hint }) => (
          <div key={id}>
            <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
              {label}
              {hint && <span className="font-normal text-gray-500"> {hint}</span>}
            </label>
            <textarea
              id={id}
              rows={3}
              value={values[id]}
              onChange={e => handleChange(id, e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        disabled={!canSubmit}
        className={`mt-8 w-full bg-indigo-600 text-white py-3 rounded-lg font-medium ${
          canSubmit ? 'cursor-pointer' : 'opacity-50 cursor-not-allowed'
        }`}
      >
        {loading ? 'Thinking…' : 'Get guidance'}
      </button>
    </>
  )
}

function Dialogue({ initialMessages, onExit }) {
  const [messages, setMessages] = useState(initialMessages)
  const [reply, setReply] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef(null)

  const canSend = reply.trim().length > 0 && !loading

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  async function handleSend() {
    const userMsg = { role: 'user', content: reply }
    const next = [...messages, userMsg]
    setMessages(next)
    setReply('')
    setLoading(true)
    try {
      const res = await fetch('/api/dialogue', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
      })
      const data = await res.json()
      setMessages(prev => [...prev, { role: 'assistant', content: data.guidance }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 p-6 pb-28">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-900 mb-2">Keep going.</h1>
        <p className="text-gray-500 mb-4">Work through it turn by turn.</p>

        <div className="h-96 overflow-y-auto bg-white border border-gray-200 rounded-lg p-4 mb-4 space-y-4">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-sm rounded-lg p-3 text-sm leading-relaxed ${
                msg.role === 'user'
                  ? 'bg-gray-200 text-gray-900'
                  : 'bg-indigo-50 border border-indigo-100 text-gray-800'
              }`}>
                {msg.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-3 text-sm text-indigo-400 italic">
                Thinking…
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        <textarea
          rows={3}
          value={reply}
          onChange={e => setReply(e.target.value)}
          placeholder="Your reply…"
          className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
        />
        <button
          type="button"
          onClick={handleSend}
          disabled={!canSend}
          className={`mt-2 w-full bg-indigo-600 text-white py-3 rounded-lg font-medium ${
            canSend ? 'cursor-pointer' : 'opacity-50 cursor-not-allowed'
          }`}
        >
          Send
        </button>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <div className="max-w-xl mx-auto flex gap-3">
          <button
            type="button"
            onClick={() => onExit('figured-out', messages)}
            className="flex-1 bg-green-600 text-white py-2 rounded-lg font-medium text-sm cursor-pointer"
          >
            I figured it out
          </button>
          <button
            type="button"
            onClick={() => onExit('stop', messages)}
            className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg font-medium text-sm cursor-pointer"
          >
            I need to stop for now
          </button>
        </div>
      </div>
    </main>
  )
}

function BreakthroughScreen({ onNewSession }) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-xl text-center">
        <h1 className="text-3xl font-semibold text-gray-900 mb-4">Nice work.</h1>
        <p className="text-gray-500 mb-8">The struggle is the learning.</p>
        <button
          type="button"
          onClick={onNewSession}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium cursor-pointer"
        >
          Start a new session
        </button>
      </div>
    </main>
  )
}

function ExitSummaryScreen({ submission, messages, onNewSession }) {
  const lastAiQuestion = [...messages].reverse().find(m => m.role === 'assistant')

  return (
    <main className="min-h-screen bg-gray-50 p-6 pb-12">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-900 mb-2">Sleeping on it is part of the process.</h1>
        <p className="text-gray-500 mb-8">Rest up. You can pick this back up tomorrow.</p>

        <div className="bg-gray-100 rounded-lg p-4 mb-6">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">Your blocker</p>
          <p className="text-gray-700 text-sm">{submission}</p>
        </div>

        <div className="mb-6">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-3">Your session</p>
          <div className="space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-sm rounded-lg p-3 text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-gray-200 text-gray-900'
                    : 'bg-indigo-50 border border-indigo-100 text-gray-800'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
          </div>
        </div>

        {lastAiQuestion && (
          <div className="bg-white border border-indigo-200 rounded-lg p-4 mb-8">
            <p className="text-xs font-medium text-indigo-500 uppercase tracking-wide mb-2">Bring this to office hours tomorrow</p>
            <p className="text-gray-800 text-sm leading-relaxed">{lastAiQuestion.content}</p>
          </div>
        )}

        <button
          type="button"
          onClick={onNewSession}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium cursor-pointer"
        >
          Start a new session
        </button>
      </div>
    </main>
  )
}

export default function App() {
  const [draft, setDraft] = useState('')
  const [submission, setSubmission] = useState(null)
  const [dialogue, setDialogue] = useState(null)
  const [closing, setClosing] = useState(null)

  const canSubmit = draft.trim().length > 0

  function handleNewSession() {
    setClosing(null)
    setDialogue(null)
    setSubmission(null)
    setDraft('')
  }

  if (closing?.type === 'figured-out') {
    return <BreakthroughScreen onNewSession={handleNewSession} />
  }

  if (closing?.type === 'stop') {
    return <ExitSummaryScreen submission={submission} messages={closing.messages} onNewSession={handleNewSession} />
  }

  if (dialogue) {
    return (
      <Dialogue
        initialMessages={dialogue}
        onExit={(type, messages) => {
          setDialogue(null)
          setClosing({ type, messages })
        }}
      />
    )
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-xl">
        {submission !== null ? (
          <BlockerDetail
            submission={submission}
            onGuidance={(userMsg, aiMsg) =>
              setDialogue([
                { role: 'user', content: userMsg },
                { role: 'assistant', content: aiMsg },
              ])
            }
          />
        ) : (
          <>
            <h1 className="text-3xl font-semibold text-gray-900 mb-2">
              GiveLearnersHint
            </h1>
            <p className="text-gray-500 mb-8">
              Describe what you're stuck on. You'll work through it yourself — no answers, just guidance.
            </p>

            <label htmlFor="problem" className="block text-sm font-medium text-gray-700 mb-2">
              What are you stuck on?
            </label>
            <p className="text-sm text-gray-500 mb-3">
              Describe your blocker as if you're explaining it to a friend who's a developer. Don't worry about being precise yet.
            </p>
            <textarea
              id="problem"
              rows={5}
              value={draft}
              onChange={e => setDraft(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
              placeholder="e.g. My function returns undefined but I expected it to return the fetched data..."
            />

            <button
              type="button"
              onClick={() => setSubmission(draft)}
              disabled={!canSubmit}
              className={`mt-4 w-full bg-indigo-600 text-white py-3 rounded-lg font-medium ${
                canSubmit ? 'cursor-pointer' : 'opacity-50 cursor-not-allowed'
              }`}
            >
              Get help
            </button>
          </>
        )}
      </div>
    </main>
  )
}
