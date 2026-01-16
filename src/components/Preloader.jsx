function Preloader({ loading }) {
  return (
    <div id="preloader" className={loading ? '' : 'loaded'}>
      <div id="status">
        <div className="preloader" aria-busy="true" aria-label="Loading, please wait." role="progressbar">
        </div>
      </div>
    </div>
  );
}

export default Preloader;
