import NewsItems from "./NewsItem";

export default function NewsGrid({ items }) {
  return (
    <div className="news-grid">
      {items.map((item, i) => (
        <NewsItems key={i} item={item} />
      ))}
    </div>
  );
}
