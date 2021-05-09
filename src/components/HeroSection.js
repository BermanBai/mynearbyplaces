import React, { useEffect, useState } from 'react';
import './HeroSection.css';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import Http from '../Http';

function HeroSection(props) {
  const [name, setName] = useState('');

  const handleSearch = async () => {
    const result = await Http.getApi(name ? '/place/' + name : '/places');
    props.onSearchResult && props.onSearchResult(result);
  };

  useEffect(() => {
    console.log('---------search-------');
    handleSearch();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="hero-container">
      <div>
        <h1>Welcome to MyNearByPlaces</h1>
        <InputGroup style={{ width: '100%' }} size="lg">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-lg">Find</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            value={name}
            onChange={(e) => setName(e.target.value.trim())}
            placeholder="restaurants, dentists, shopping malls..."
          />
          <InputGroup.Append>
            <Button variant="secondary" onClick={handleSearch}>
              Search
            </Button>
          </InputGroup.Append>
        </InputGroup>
        <br />
        {/* <div>
          <Link className="hero-link">Restaurants</Link>
          <Link className="hero-link">Home Services</Link>
          <Link className="hero-link">Delivery</Link>
          <Link className="hero-link">Plumbers</Link>
        </div> */}
      </div>
    </div>
  );
}

export default HeroSection;
