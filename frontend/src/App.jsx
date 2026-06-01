import { useState } from 'react'

export default function App() {
  const [draft, setDraft] = useState('')
  const [submission, setSubmission] = useState(null)

  const canSubmit = draft.trim().length > 0

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-xl">
        {submission !== null ? (
          <>
            <h1 className="text-3xl font-semibold text-gray-900 mb-2">
              Let's break it down.
            </h1>
            <p className="text-gray-500">
              Next step coming soon.
            </p>
          </>
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
