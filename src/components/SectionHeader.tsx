/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

interface SectionHeaderProps {
  id?: string;
  tag: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
}

export default function SectionHeader({ id, tag, title, subtitle, align = 'center' }: SectionHeaderProps) {
  const isCenter = align === 'center';
  return (
    <div id={id} className={`max-w-3xl mb-12 ${isCenter ? 'mx-auto text-center' : 'text-left'}`}>
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-teal-400 tracking-wider uppercase mb-4">
        {tag}
      </span>
      <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-sans max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
