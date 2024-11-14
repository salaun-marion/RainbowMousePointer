import { useDelayedValue } from '../fonctions/useDelayedValues';
import { usePointerPosition } from '../fonctions/usePointerPosition';
import Cercle from './Cercle';

const rainbowColors = [
  'rgba(255, 0, 0, 1)',
  'rgba(255, 0, 0, 1)',
  'rgba(255, 51, 0, 1)',
  'rgba(255, 102, 0, 1)',
  'rgba(255, 153, 0, 1)',
  'rgba(255, 204, 0, 1)',
  'rgba(204, 255, 0, 1)',
  'rgba(153, 255, 0, 1)',
  'rgba(102, 255, 0, 1)',
  'rgba(51, 255, 0, 1)',
  'rgba(0, 255, 51, 1)',
  'rgba(0, 255, 102, 1)',
  'rgba(0, 255, 153, 1)',
  'rgba(0, 255, 204, 1)',
  'rgba(0, 204, 255, 1)',
  'rgba(0, 153, 255, 1)',
  'rgba(0, 102, 255, 1)',
  'rgba(0, 51, 255, 1)',
  'rgba(0, 0, 255, 1)',
  'rgba(51, 0, 255, 1)',
  'rgba(75, 0, 130, 1)',
];

export default function Canvas() {
  const pos1 = usePointerPosition();
  const delay = 2.5;

  const pos2 = useDelayedValue(pos1, delay);
  const pos3 = useDelayedValue(pos2, delay);
  const pos4 = useDelayedValue(pos3, delay);
  const pos5 = useDelayedValue(pos4, delay);
  const pos6 = useDelayedValue(pos5, delay);
  const pos7 = useDelayedValue(pos6, delay);
  const pos8 = useDelayedValue(pos7, delay);
  const pos9 = useDelayedValue(pos8, delay);
  const pos10 = useDelayedValue(pos9, delay);
  const pos11 = useDelayedValue(pos10, delay);
  const pos12 = useDelayedValue(pos11, delay);
  const pos13 = useDelayedValue(pos12, delay);
  const pos14 = useDelayedValue(pos13, delay);
  const pos15 = useDelayedValue(pos14, delay);
  const pos16 = useDelayedValue(pos15, delay);
  const pos17 = useDelayedValue(pos16, delay);
  const pos18 = useDelayedValue(pos17, delay);
  const pos19 = useDelayedValue(pos18, delay);
  const pos20 = useDelayedValue(pos19, delay);
  const pos21 = useDelayedValue(pos20, delay);

  const positions = [
    pos1,
    pos2,
    pos3,
    pos4,
    pos5,
    pos6,
    pos7,
    pos8,
    pos9,
    pos10,
    pos11,
    pos12,
    pos13,
    pos14,
    pos15,
    pos16,
    pos17,
    pos18,
    pos19,
    pos20,
    pos21,
  ];

  return (
    <>
      {rainbowColors.map((color, index) => {
        return <Cercle key={index} position={positions[index]} color={color} />;
      })}
    </>
  );
}

// or create the circles and fade them ?
