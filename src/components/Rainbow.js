export default function Rainbow({ position, color }) {
  return (
    <div
      style={{
        position: 'absolute',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        transform: `translate(${position.x}px, ${position.y}px) `,
        transition: '20ms cubic-bezier-easing-function 0ms',
        pointerEvents: 'none',
        backgroundColor: color,
      }}
    ></div>
  );
}
