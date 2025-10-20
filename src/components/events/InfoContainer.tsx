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
        <p className="text-6xl text-white mb-2 font-dreamer">
          {title}
        </p>
        <p className="mb-4 font-chivo-mono text-base" style={{ color: '#FF00DC' }}>
          {date} | {time}
        </p>
        <div className="text-white/100 space-y-4 leading-[32px] text-[32px] font-light">
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
}

export default EventDay;
