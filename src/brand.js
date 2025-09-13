// src/brand.js
import React from 'react';

// Single combined artwork (logo + name)
export const BRAND_MARK =
  'https://res.cloudinary.com/dlfa42ans/image/upload/v1757750794/sdk-logo_m2h8j7.png';

/**
 * BrandHeader
 * Renders ONLY the brand image (no text/colors).
 *
 * Props:
 *  - size: 'xs' | 'sm' | 'md' | 'lg' | number  (default 'md')
 *          If a number is given, it's treated as maxWidth in px.
 *  - maxWidth?: number     // override width cap (px)
 *  - maxHeight?: number    // override height cap (px)
 *  - align?: 'left'|'center'|'right' (default 'left')
 *  - style?: object        // extra container styles
 *  - className?: string
 */
const PRESETS = {
  xs: { maxWidth: 160, maxHeight: 38 },
  sm: { maxWidth: 200, maxHeight: 46 },
  md: { maxWidth: 230, maxHeight: 52 },  // good default (smaller than before)
  lg: { maxWidth: 260, maxHeight: 60 },
};

export function BrandHeader({
  size = 'md',
  maxWidth,
  maxHeight,
  align = 'left',
  style,
  className,
}) {
  const preset =
    typeof size === 'string' ? (PRESETS[size] || PRESETS.md) : null;

  // If size is a number, treat it as maxWidth
  const w = maxWidth ?? (typeof size === 'number' ? size : preset.maxWidth);
  const h = maxHeight ?? (preset ? preset.maxHeight : undefined);

  return (
    <div
      className={className}
      style={{
        textAlign: align,
        padding: '10px 16px 0',
        ...(style || {}),
      }}
    >
      <img
        src={BRAND_MARK}
        alt=""
        style={{
          display: 'inline-block',
          maxWidth: w,
          maxHeight: h,
          width: 'auto',
          height: 'auto',
          objectFit: 'contain',
          userSelect: 'none',
          pointerEvents: 'none',
        }}
        crossOrigin="anonymous"
        draggable={false}
      />
    </div>
  );
}
