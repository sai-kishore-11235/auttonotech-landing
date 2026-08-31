import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ScrollRevealProps extends React.HTMLAttributes<HTMLElement> {
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  loadingDuration?: number;
}

export function ScrollReveal({
  as: Tag = 'div',
  children,
  className = '',
  loadingDuration,
  ...props
}: ScrollRevealProps) {
  const { ref, className: revealClassName } = useScrollReveal<HTMLElement>({ loadingDuration });

  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={`${revealClassName} ${className}`.trim()}
      {...props}
    >
      <div className="scroll-reveal-loader" aria-hidden="true">
        <span className="scroll-reveal-loader-bar" />
      </div>
      <div className="scroll-reveal-content">{children}</div>
    </Tag>
  );
}
