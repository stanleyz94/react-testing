import { useRef, useState } from 'react';
import LoadingButton from '../../../../components/UI/LoadingButton/LoadingButton';
import Input from '../../../../components/Input/Input';

const AddHotel = (props) => {
  const imageRef = useRef();
  const [form, setForm] = useState({
    name: '',
    description: '',
    city: '',
    rooms: 2,
    features: [],
    image: null,
    status: 0,
  });

  const [loading, setLoading] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    });
    console.log(form);
    console.log(imageRef.current);
  };

  const changeFeatureHandler = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    if (isChecked) {
      const newFeatures = [...form.features, value];

      setForm({ ...form, features: newFeatures });
    } else {
      // chce przefiltrowac i zostawic te ktore sa inne od tej aktualnej
      // wartosci (aktualnego value)
      const newFeatures = form.features.filter((x) => x !== value);
      console.log('newFeatures', value);
      setForm({ ...form, features: newFeatures });
    }
  };

  return (
    <div className="card">
      <div className="card-header">Nowy hotel</div>
      <div className="card-body">
        <p className="text-muted">Uzupełnij dane hotelu</p>
        <form onSubmit={submit}>
          <div className="form-group">
            <label>Nazwa</label>
            <input
              value={form.name}
              type="text"
              className={`form-control  ${false ? 'is-invalid' : ''}`}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <div className="invalid-feedback">Błąd</div>
          </div>
          <Input
            label="Nazwa"
            value={form.name}
            onChange={(value) => setForm({ ...form, name: value })}
            isValid={true}
            showError={false}
          />
          <div className="form-group">
            <label>Opis</label>
            <textarea
              value={form.description}
              type="text"
              className={`form-control  ${false ? 'is-invalid' : ''}`}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            />
            <div className="invalid-feedback">Błąd</div>
          </div>

          <div className="form-group">
            <label>Miejscowość</label>
            <input
              value={form.city}
              type="text"
              className={`form-control  ${false ? 'is-invalid' : ''}`}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
            />
            <div className="invalid-feedback">Błąd</div>
          </div>
          <div className="form-group">
            <label>Ilość pokoi</label>
            <select
              value={form.rooms}
              onChange={(e) => setForm({ ...form, rooms: e.target.value })}
              className="form-control"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <div className="test"></div>
            <div className="invalid-feedback">Błąd</div>
          </div>

          <h3>Udogodnienia</h3>
          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                checked={form.features.find((x) => x === 'tv')}
                value="tv"
                type="checkbox"
                className="custom-control-input"
                id="tv"
                onChange={changeFeatureHandler}
              />
              <label className="custom-control-label" htmlFor="tv">
                TV
              </label>
            </div>
            <div className="custom-control custom-checkbox">
              <input
                value="wifi"
                checked={form.features.find((x) => x === 'wifi')}
                type="checkbox"
                className="custom-control-input"
                id="wifi"
                onChange={changeFeatureHandler}
              />
              <label className="custom-control-label" htmlFor="wifi">
                WiFi
              </label>
            </div>
            <div className="custom-control custom-checkbox">
              <input
                value="parking"
                checked={form.features.find((x) => x === 'parking')}
                type="checkbox"
                className="custom-control-input"
                id="parking"
                onChange={changeFeatureHandler}
              />
              <label className="custom-control-label" htmlFor="parking">
                Parking
              </label>
            </div>
          </div>
          <h4>Zdjęcie</h4>
          <div className="form-group">
            <input
              type="file"
              ref={imageRef}
              onChange={(e) => setForm({ ...form, image: e.target.files })}
            />
          </div>
          <h3>Aktywny</h3>
          <div className="form-group">
            <div className="custom-control custom-radio">
              <input
                type="radio"
                id="status-hide"
                name="status"
                value="0"
                onChange={(e) => setForm({ ...form, status: e.target.value })}
                className="custom-control-input"
                checked={form.status == 0}
              />
              <label className="custom-control-label" htmlFor="status-hide">
                Ukryty
              </label>
            </div>
            <div className="custom-control custom-radio">
              <input
                type="radio"
                id="status-active"
                name="status"
                onChange={(e) => setForm({ ...form, status: e.target.value })}
                className="custom-control-input"
                value="1"
                checked={form.status == 1}
              />
              <label className="custom-control-label" htmlFor="status-active">
                Aktywny
              </label>
            </div>
          </div>
          <div className="text-right">
            <LoadingButton loading={loading} className="btn-success">
              Dodaj hotel
            </LoadingButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddHotel;
