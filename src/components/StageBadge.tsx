interface Props {
  num: string;
  name: string;
  blurb: string;
}

export default function StageBadge({ num, name, blurb }: Props) {
  return (
    <div className="flex items-center gap-3 font-mono text-sm">
      <span className="inline-flex items-center rounded border border-signal/40 bg-signal/10 px-2.5 py-1 text-signal">
        STAGE {num}
      </span>
      <span className="font-bold tracking-widest text-white">{name}</span>
      <span className="text-dim">— {blurb}</span>
    </div>
  );
}
