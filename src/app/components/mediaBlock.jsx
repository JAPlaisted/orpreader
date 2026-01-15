const MediaBlock = ({ 
    imageUrl, 
    eyebrow, 
    heading, 
    body, 
    buttons = [],
    isReversed,
}) => {
  return (
    <div className="media-block grid grid-cols-1 md:grid-cols-2 gap-4 overflow-hidden">
      {imageUrl && (
        <figure className={`col-span-1 ${isReversed ? 'md:order-2' : 'md:order-1'}`}>
          <img
            src={imageUrl}
            alt={heading || 'Media Block Image'}
            className="w-full h-full object-cover"
          />
        </figure>
      )}

      <div className={`col-span-1 flex flex-col justify-center p-6 ${ isReversed ? 'md:order-1' : 'md:order-2' }`}>
        {eyebrow && (
          <span className="eyebrow text-primary mb-2">{eyebrow}</span>
        )}
        {heading && <h2 className="heading mb-4">{heading}</h2>}
        {body && <p className="body mb-6">{body}</p>}
        <div className="flex flex-wrap gap-3">
          {buttons.map((b, i) => {
            if (!b.label || !b.link) return null;
            return (
              <a
                key={i}
                href={b.link}
                className={`button btn ${b.theme || ''}`}
              >
                {b.label}
              </a>
            );
          })}
        </div>
      </div>
      
    </div>
  );
};

export default MediaBlock;