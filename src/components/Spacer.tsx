type SpacerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

const sizeMap: Record<SpacerSize, string> = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  xxl: '48px',
};

export default function Spacer({ size = 'md' }: { size?: SpacerSize }) {
  return <div style={{ height: sizeMap[size] }} />;
}