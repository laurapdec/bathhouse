'use server'

export type NewsletterState = { success: boolean; error?: string } | null

export async function subscribeToNewsletter(
  prevState: NewsletterState,
  formData: FormData
): Promise<NewsletterState> {
  const email = formData.get('email')?.toString().trim()

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: 'Please enter a valid email address.' }
  }

  // --- Connect your email service here ---
  // Resend example:
  //   const res = await fetch('https://api.resend.com/audiences/{AUDIENCE_ID}/contacts', {
  //     method: 'POST',
  //     headers: {
  //       Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ email }),
  //   })
  //   if (!res.ok) return { success: false, error: 'Could not subscribe. Try again.' }
  //
  // Mailchimp example:
  //   const res = await fetch(`https://{dc}.api.mailchimp.com/3.0/lists/{LIST_ID}/members`, {
  //     method: 'POST',
  //     headers: {
  //       Authorization: `Bearer ${process.env.MAILCHIMP_API_KEY}`,
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ email_address: email, status: 'subscribed' }),
  //   })
  //   if (!res.ok) return { success: false, error: 'Could not subscribe. Try again.' }
  // --- End email service block ---

  console.log('[newsletter] new signup:', email)

  return { success: true }
}
