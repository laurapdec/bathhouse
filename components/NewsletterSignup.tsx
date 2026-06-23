'use client'

import { useActionState } from 'react'
import { subscribeToNewsletter } from '@/app/actions/newsletter'
import type { NewsletterState } from '@/app/actions/newsletter'

type Props = {
  /** Visual variant : "light" (cream bg) or "dark" (ink bg) */
  variant?: 'light' | 'dark'
}

const initialState: NewsletterState = null

export default function NewsletterSignup({ variant = 'light' }: Props) {
  const [state, action, pending] = useActionState(subscribeToNewsletter, initialState)

  const isDark = variant === 'dark'

  if (state?.success) {
    return (
      <div className={`flex items-center gap-3 py-3 ${isDark ? 'text-cream' : 'text-ink'}`}>
        <CheckIcon className="text-sage flex-shrink-0" />
        <p className="text-sm font-medium">
          You&rsquo;re on the list! We&rsquo;ll keep you posted on new classes.
        </p>
      </div>
    )
  }

  return (
    <form action={action} className="flex flex-col sm:flex-row gap-3">
      <div className="flex-1 relative">
        <input
          type="email"
          name="email"
          required
          placeholder="your@email.com"
          className={`w-full px-4 py-3 rounded-full text-sm outline-none border transition-colors
            ${isDark
              ? 'bg-white/10 border-white/20 text-cream placeholder:text-cream/40 focus:border-cream/50'
              : 'bg-surface border-sand text-ink placeholder:text-ink-light focus:border-terracotta'
            }`}
        />
      </div>
      <button
        type="submit"
        disabled={pending}
        className={`px-6 py-3 rounded-full text-sm font-medium transition-colors flex-shrink-0
          ${isDark
            ? 'bg-terracotta text-cream hover:bg-terracotta-dark disabled:opacity-60'
            : 'bg-ink text-cream hover:bg-ink/80 disabled:opacity-60'
          }`}
      >
        {pending ? 'Subscribing…' : 'Stay in the loop'}
      </button>
      {state?.error && (
        <p className={`text-xs mt-1 sm:absolute sm:bottom-0 ${isDark ? 'text-rose' : 'text-terracotta'}`}>
          {state.error}
        </p>
      )}
    </form>
  )
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}
