function ProjectModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <>
      <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}></div>
      <div className={`popup-modal ${isOpen ? 'active' : ''}`}>
        <div className="close-popup-modal" onClick={onClose}>
          ✕
        </div>
        <div className="clearfix"></div>
        <div className="modal-content">
          <div className="container">
            <div className="portfolio-padding">
              <h2>FRAX: AI-Based Fracture<br /> Detection System</h2>
              <div className="h-50"></div>
              <p>
                Developed an explainable AI system for bone fracture classification and segmentation using
                transfer learning with models such as ResNet, DenseNet, and EfficientNet.
              </p>
              <p>
                Leveraged TensorFlow, OpenCV, Flask, and Grad CAM for model development and visualization,
                and used large language models to generate human readable explanations. Evaluated
                performance using accuracy, precision, recall, and F1 score, with the best model achieving
                91.2% accuracy on the validation set.
              </p>
              <br />
              <br />
              <img src="/images/portfolio/02.jpg" alt="FRAX Project" className="img-responsive" style={{ maxWidth: '100%' }} />
              <br />
              <br />
              <p><strong>Technologies Used:</strong> TensorFlow, OpenCV, Flask, Grad-CAM, Python</p>
              <p><strong>Achievement:</strong> First place winner in the Research Competition at Universitas Klabat, April 2025.</p>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectModal;
