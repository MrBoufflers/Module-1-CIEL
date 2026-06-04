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
    <div className="blocks">
      {blocks.map((block, i) => {
        if (!block || !block.type) return null;
        const Component = BLOCK_MAP[block.type];
        if (!Component) {
          console.warn(`[BlockRenderer] Unknown block type: "${block.type}"`);
          return null;
        }
        return <Component key={i} {...block} />;
      })}
    </div>
  );
}
