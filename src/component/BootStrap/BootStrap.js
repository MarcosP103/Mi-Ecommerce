import Accordion from 'react-bootstrap/Accordion';
import './StyleBoot.css'

function AllCollapseExample() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Conocenos</Accordion.Header>
        <Accordion.Body>
        En nuestra tienda de instrumentos musicales, nos esforzamos por brindar a músicos de todos los niveles una experiencia excepcional. Nuestro objetivo es ofrecer una amplia gama de instrumentos de alta calidad, asesoramiento experto y precios competitivos. Queremos ser tu destino preferido para satisfacer todas tus necesidades musicales. ¡Descubre tu pasión con nosotros!
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AllCollapseExample;