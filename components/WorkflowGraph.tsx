'use client';

import { motion } from 'framer-motion';

type Node = {
  id: string;
  x: number;
  y: number;
  label: string;
  sub: string;
  accent: 'indigo' | 'purple' | 'signal';
};

const nodes: Node[] = [
  { id: 'trigger', x: 40, y: 60, label: 'Gmail Trigger', sub: 'every 1m', accent: 'signal' },
  { id: 'agent', x: 230, y: 30, label: 'AI Agent', sub: 'Gemini · GPT-4.1', accent: 'indigo' },
  { id: 'lookup', x: 230, y: 150, label: 'Vector Lookup', sub: 'Supabase', accent: 'purple' },
  { id: 'action', x: 420, y: 90, label: 'Send Reply', sub: 'Gmail API', accent: 'signal' },
];

const edges: [string, string][] = [
  ['trigger', 'agent'],
  ['trigger', 'lookup'],
  ['agent', 'action'],
  ['lookup', 'agent'],
];

const accentHex: Record<Node['accent'], string> = {
  indigo: '#6F5CFF',
  purple: '#B453FF',
  signal: '#3DDC97',
};

function getNode(id: string) {
  return nodes.find((n) => n.id === id)!;
}

export default function WorkflowGraph() {
  return (
    <div className="relative w-full h-[320px] sm:h-[360px]" role="img" aria-label="Animated diagram of an automated workflow: a trigger feeding an AI agent and a vector lookup, which together produce an automated reply.">
      <svg
        viewBox="0 0 480 220"
        className="w-full h-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* edges */}
        {edges.map(([from, to], i) => {
          const a = getNode(from);
          const b = getNode(to);
          const midX = (a.x + b.x) / 2;
          const path = `M ${a.x + 70} ${a.y + 14} C ${midX} ${a.y + 14}, ${midX} ${b.y + 14}, ${b.x} ${b.y + 14}`;
          return (
            <g key={i}>
              <path d={path} stroke="#232B40" strokeWidth="1.5" fill="none" />
              <path
                d={path}
                stroke={accentHex[a.accent]}
                strokeWidth="1.5"
                strokeDasharray="6 10"
                fill="none"
                className="animate-dash"
                style={{ opacity: 0.8 }}
              />
            </g>
          );
        })}

        {/* nodes */}
        {nodes.map((n, i) => (
          <g key={n.id}>
            <motion.g
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 * i, duration: 0.5, ease: 'easeOut' }}
            >
              <rect
                x={n.x}
                y={n.y}
                width="140"
                height="44"
                rx="10"
                fill="#0F1526"
                stroke="#232B40"
                strokeWidth="1"
              />
              <rect
                x={n.x}
                y={n.y}
                width="140"
                height="44"
                rx="10"
                fill="none"
                stroke={accentHex[n.accent]}
                strokeOpacity="0.35"
                strokeWidth="1"
              />
              <circle
                cx={n.x + 16}
                cy={n.y + 14}
                r="4"
                fill={accentHex[n.accent]}
                className="animate-pulse-slow"
              />
              <text
                x={n.x + 28}
                y={n.y + 18}
                fill="#E7EBF5"
                fontSize="11"
                fontFamily="var(--font-space-grotesk), sans-serif"
                fontWeight="600"
              >
                {n.label}
              </text>
              <text
                x={n.x + 28}
                y={n.y + 32}
                fill="#5A6478"
                fontSize="9"
                fontFamily="var(--font-jetbrains-mono), monospace"
              >
                {n.sub}
              </text>
            </motion.g>
          </g>
        ))}
      </svg>
    </div>
  );
}
