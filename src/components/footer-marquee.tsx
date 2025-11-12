export function FooterMarquee() {
  const text = "STRATEGIC • INNOVATIVE • IMPACTFUL • ";
  const loop = `${text.repeat(6)}`;

  return (
    <div className="marquee border-t border-white/10 py-8">
      <div className="marquee-track footer-marquee-track uppercase text-white/80">
        <span aria-hidden="true">{loop}</span>
      </div>
    </div>
  );
}
