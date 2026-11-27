# Project memory

## Product intent & audience

- Local dental practice marketing site for "BrightSmile Dental Studio."
- Audience: prospective patients; primary conversion goal is booking a visit.
- Single-page landing page; no routing needed yet.

## Brand personality & voice

- Trustworthy, calm, professional healthcare tone.
- Confidence-building signals used throughout: stats strip, patient testimonials, doctor credentials, FAQ.

## Visual design & UX direction

- Palette: crisp white background, soft teal accents, navy for dark sections/text.
- Typography: Fraunces serif for headings, Inter for body text (loaded via index.html/fonts).
- Lucide React icons used for all iconography and currently for hero/doctor visuals (real photos not yet integrated).
- Layout patterns: section fade-in-on-scroll reveal hook, collapsible mobile header menu, centered max-width containers.
- Premium feel details: subtle dotted texture background, drifting gradient blobs, floating trust chips in hero.
- Booking interaction: "Book Your Visit" buttons open a modal with form fields and a confirmation state; same modal reused across sections.
- Components kept in a single comprehensive App file for now.

## Decisions, constraints & rationale

- Replaced prior quiz-app code with the landing page; old quiz files are unused but still present.
- Used icon/CSS-driven visuals instead of photos because the photo service (Pexels) was unavailable; visuals are placeholders to swap later.
- Booking modal is UI-only (no backend) unless requested.
- Tailwind config and index.css were customized for the dental theme and fonts.

## Open questions & assumptions

- Photos: real hero image and doctor portrait to replace icon visuals when image source is available.
- Booking: whether form submissions should integrate with a real calendar/CRM/email endpoint.
- Cleanup: whether to delete leftover unused quiz-app files.
- Brand specifics: Dr. Patel is a placeholder name; address, phone, email, and hours are placeholders to confirm with client.