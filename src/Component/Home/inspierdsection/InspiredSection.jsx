import InspiredImageColumnn from "./InspiredImageColumn/InspiredImageColumn";
import InspiredHeadingColumn from "./InspiredHeadingColumn/InspiredHeadingColumn";
import './InspiredSection.css'
const InspiredSection = () => (
    <section className="uttrakhand-destination">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <InspiredImageColumnn/>
          <InspiredHeadingColumn />
        </div>
      </div>
    </section>
  );
  
  export default InspiredSection;