import HeroBlock from './HeroBlock';
import SectionBlock from './SectionBlock';
import ProseBlock from './ProseBlock';
import InfoBlock from './InfoBlock';
import CodeBlock from './CodeBlock';
import CardsBlock from './CardsBlock';
import ImageBlock from './ImageBlock';
import ListBlock from './ListBlock';
import ComponentBlock from './ComponentBlock';
import TableBlock from './TableBlock';

const BLOCK_MAP = {
  hero: HeroBlock,
  section: SectionBlock,
  prose: ProseBlock,
  info: InfoBlock,
  code: CodeBlock,
  cards: CardsBlock,
  image: ImageBlock,
  list: ListBlock,
  component: ComponentBlock,
  table: TableBlock,
};

export default function BlockRenderer({ blocks }) {
  if (!blocks || !Array.isArray(blocks)) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {blocks.map((block, i) => {
        if (!block || !block.type) return null;
        const Component = BLOCK_MAP[block.type];
        if (!Component) {
          console.warn(`[BlockRenderer] Unknown block type: "${block.type}"`);
          return null;
        }
        const isSection = block.type === 'section';
        const marginTop = i === 0 ? 0 : isSection ? 56 : 24;
        return (
          <div key={i} style={{ marginTop }}>
            <Component {...block} />
          </div>
        );
      })}
    </div>
  );
}
