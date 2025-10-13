interface EventDayProps {
  title: string;
  date: string;
  time: string;
  description: string;
}

function EventDay({ title, date, time, description }: EventDayProps) {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <p className="text-5xl font-bold text-white mb-8" style={{ fontFamily: 'monospace' }}>
          {title}
        </p>
        <p className="text-white/80 mb-4">
          {date} | {time}
        </p>
        <div className="text-white/80 space-y-4">
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
}

export default EventDay;
