export function HeroMotif() {
  return (
    <div className="hidden sm:block" aria-hidden="true">
      <svg viewBox="0 0 1100 230" className="h-auto w-full">
        <path
          d="M20 190 C 110 120, 190 100, 290 130 S 470 205, 570 150 S 690 95, 720 108"
          fill="none"
          stroke="var(--accent)"
          strokeOpacity="0.4"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeDasharray="0.5 13"
        />

        <circle cx="105" cy="146" r="15" fill="var(--accent)" fillOpacity="0.14" />
        <circle cx="105" cy="146" r="7" fill="var(--accent)" />
        <text
          x="105"
          y="118"
          textAnchor="middle"
          fill="var(--muted)"
          fontFamily="Host Grotesk, sans-serif"
          fontSize="11"
          fontWeight="500"
          letterSpacing="2.4"
        >
          WRITING
        </text>

        <circle cx="410" cy="165" r="15" fill="var(--accent)" fillOpacity="0.14" />
        <circle cx="410" cy="165" r="7" fill="var(--accent)" />
        <text
          x="410"
          y="137"
          textAnchor="middle"
          fill="var(--muted)"
          fontFamily="Host Grotesk, sans-serif"
          fontSize="11"
          fontWeight="500"
          letterSpacing="2.4"
        >
          AUTOMATION
        </text>

        <circle cx="660" cy="126" r="15" fill="var(--accent)" fillOpacity="0.14" />
        <circle cx="660" cy="126" r="7" fill="var(--accent)" />
        <text
          x="660"
          y="98"
          textAnchor="middle"
          fill="var(--muted)"
          fontFamily="Host Grotesk, sans-serif"
          fontSize="11"
          fontWeight="500"
          letterSpacing="2.4"
        >
          AI POLICY
        </text>

        <path d="M818 24v128M830 24v128" stroke="var(--royal)" strokeWidth="2.5" />

        <g stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round">
          <path d="M950 22v10M950 118v10M912 75h-10M998 75h10M923 48l-7-7M977 48l7-7M923 102l-7 7M977 102l7 7" />
        </g>
        <circle cx="950" cy="75" r="17" fill="var(--accent)" />
        <text
          x="950"
          y="140"
          textAnchor="middle"
          fill="var(--ink)"
          fontFamily="Cormorant Garamond, serif"
          fontStyle="italic"
          fontSize="17"
        >
          systems
        </text>
      </svg>
    </div>
  );
}
