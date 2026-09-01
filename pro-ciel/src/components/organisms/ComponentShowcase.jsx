import imgMother from "../../assets/images/motherboard.jpg";
import imgCPU from "../../assets/images/CPU.jpg";
import imgRAM from "../../assets/images/RAM.jpg";
import imgGPU from "../../assets/images/GPU.jpg";
import imgSSD from "../../assets/images/SSD.jpg";
import imgPSU from "../../assets/images/PSU.jpg";

const componentsData = [
  { id: 1, name: "Carte Mère", description: "Le système nerveux de l'ordinateur. Elle connecte tous les composants entre eux pour qu'ils puissent communiquer.", imageUrl: imgMother },
  { id: 2, name: "Processeur (CPU)", description: "Le cerveau de la machine. Il exécute les instructions et effectue tous les calculs nécessaires au fonctionnement des programmes.", imageUrl: imgCPU },
  { id: 3, name: "Mémoire Vive (RAM)", description: "La mémoire à court terme de l'ordinateur. Elle stocke temporairement les données des applications en cours d'utilisation.", imageUrl: imgRAM },
  { id: 4, name: "Carte Graphique (GPU)", description: "Spécialisée dans le traitement des images et des vidéos, elle gère tout ce qui est affiché à l'écran.", imageUrl: imgGPU },
  { id: 5, name: "Disque de Stockage (SSD/HDD)", description: "La mémoire à long terme. C'est ici que sont conservés le système d'exploitation, vos logiciels et vos fichiers.", imageUrl: imgSSD },
  { id: 6, name: "Alimentation (PSU)", description: "Le cœur de l'ordinateur. Elle convertit le courant du mur en tensions utilisables par tous les autres composants.", imageUrl: imgPSU },
];

function ComponentCard({ name, description, imageUrl }) {
  return (
    <div style={{
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius)',
      overflow: 'hidden',
      transition: 'transform 0.2s, box-shadow 0.2s',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = 'var(--shadow-soft)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
    >
      <img src={imageUrl} alt={name} style={{ width: '100%', height: 180, objectFit: 'cover', display: 'block' }} />
      <div style={{ padding: '18px' }}>
        <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>{name}</h3>
        <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--text-muted)' }}>{description}</p>
      </div>
    </div>
  );
}

export default function ComponentShowcase() {
  return (
    <div style={{
      borderRadius: 'var(--radius-lg)',
      padding: '28px 24px',
      background: 'var(--surface-2)',
      border: '1px solid var(--border)',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: 16,
      }}>
        {componentsData.map(component => (
          <ComponentCard
            key={component.id}
            name={component.name}
            description={component.description}
            imageUrl={component.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
