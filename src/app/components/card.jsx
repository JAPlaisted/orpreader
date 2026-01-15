'use client';

export default function Card({
  imageUrl = '',
  imageAlt = '',
  eyebrow = '',
  heading = '',
  body = '',
  button = null, // { label, href, theme: 'btn-primary', size: 'btn' }
  buttonTheme = undefined, 
}) {
  if (!imageUrl && !eyebrow && !heading && !body && !button) {
    return null;
  }

  const computedTheme = buttonTheme || button?.theme || 'btn-primary';
  const computedSize = button?.size || 'btn';

  return (
    <article className="card">
      {imageUrl && (
        <div className="card__media">
          <img src={imageUrl} alt={imageAlt || ''} />
        </div>
      )}

      <div className="card__body">
        {eyebrow && <div className="eyebrow text-primary mb-2">{eyebrow}</div>}
        {heading && <h3 className="subheading mb-2">{heading}</h3>}
        {body && <p className="body text-dark/80">{body}</p>}
      </div>

      {button?.label && (
        <div className="card__actions mt-4">
          <a
            href={button.href || '#'}
            className={`button ${computedSize} ${computedTheme}`}
          >
            {button.label}
          </a>
        </div>
      )}
    </article>
  );
}
