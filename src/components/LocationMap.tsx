/*
  Google Business Profile map embed.

  Shared so the URL lives in one place — it appears in the footer and on the
  booking page.

  Sizing note worth keeping: Google collapses the business info card (name,
  address, star rating) into a bare "Open in Maps" chip once the iframe drops
  below roughly 400px wide. Give this at least that much room wherever it is
  used, or the rating quietly disappears.
*/
const EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2960.9312793331314!2d-72.06048369999999!3d42.087521900000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e6a7e25853e50b%3A0x725b4f148e17210d!2sFunctional%20Massage%20Therapy!5e0!3m2!1sen!2sus!4v1784424956324!5m2!1sen!2sus";

export function LocationMap({ className = "" }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl ${className}`}>
      <iframe
        src={EMBED_SRC}
        title="Map showing Functional Massage Therapy at 48 Main St, Sturbridge, MA"
        loading="lazy"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        className="h-full w-full border-0"
      />
    </div>
  );
}
