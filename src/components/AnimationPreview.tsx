import type { AnimationPreset } from '../types';

interface AnimationPreviewProps {
  preset: AnimationPreset;
}

export const AnimationPreview = ({ preset }: AnimationPreviewProps): JSX.Element => {
  const gradient = `linear-gradient(135deg, ${preset.gradient.join(', ')})`;

  return (
    <div
      className="border-round-2xl shadow-2 overflow-hidden animation-preview"
      style={{
        backgroundImage: `${gradient}${preset.backdrop ? `, ${preset.backdrop}` : ''}`
      }}
    >
      <div className="p-4 flex flex-column gap-3" style={{ backdropFilter: 'blur(8px)', backgroundColor: 'rgba(0,0,0,0.25)' }}>
        <span className="text-sm text-primary-100">{preset.name}</span>
        <h3 className="text-2xl text-white m-0">{preset.description}</h3>
        <div className="flex gap-2 flex-wrap">
          {preset.gradient.map(color => (
            <span key={color} className="border-circle" style={{ background: color, width: '28px', height: '28px' }} />
          ))}
        </div>
      </div>
    </div>
  );
};