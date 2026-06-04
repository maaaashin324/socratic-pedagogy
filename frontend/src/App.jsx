import { useState } from 'react'

const FIELDS = [
  { id: 'expected', label: 'What did you expect?' },
  { id: 'happened', label: 'What actually happened?', hint: '(paste your error message here if you have one)' },
  { id: 'tried', label: 'What have you already tried?' },
]

function BlockerDetail({ submission }) {
  const [values, setValues] = useState({ expected: '', happened: '', tried: '' })
  const [loading, setLoading] = useState(false)
  const [guidance, setGuidance] = useState(null)

  const canSubmit = FIELDS.every(f => values[f.id].trim()) && !loading

  function handleChange(id, value) {
    setValues(prev => ({ ...prev, [id]: value }))
  }

  async function handleSubmit() {
    setLoading(true)
    try {
      const res = await fetch('/api/blocker', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description: submission, ...values }),
      })
      const data = await res.json()
      setGuidance(data.guidance)
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

      {guidance ? (
        <div className="mt-8 bg-indigo-50 border border-indigo-100 rounded-lg p-4">
          <p className="text-xs font-medium text-indigo-400 uppercase tracking-wide mb-2">
            Guidance
          </p>
          <p className="text-gray-800 text-sm leading-relaxed">{guidance}</p>
        </div>
      ) : (
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
      )}
    </>
  )
}

export default function App() {
  const [draft, setDraft] = useState('')
  const [submission, setSubmission] = useState(null)

  const canSubmit = draft.trim().length > 0

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-xl">
        {submission !== null ? (
          <BlockerDetail submission={submission} />
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
