import React, { useState } from 'react';
import HeroSection from '../HeroSection';
import { Form, Button } from 'react-bootstrap';
// import Review from '../Review';
import '../Home.css';
import Http from '../../Http';

const PlaceDetailDialog = (props) => {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(5);
  const { info } = props;

  const handleSubmit = async () => {
    const { name, p_id } = props.info;
    const result = await Http.postApi(`/review/${name}`, { placeid: Number(p_id), comment, rating });
    info.list.push(result);
    props.onClose && props.onClose();
  };
  const { list } = info;
  console.log(info);

  return (
    <div className="dialog">
      <div className="d-body">
        <div>
          Place:
          <strong>{info.name}</strong>
        </div>
        <div style={{marginTop:'10px'}}>Review list</div>
        <div className="review-list">
          {list && list.length > 0 ? (
            <div>
              {list.map((item, index) => {
                return (
                  <div className="review-item" key={index}>
                    <div className="rating-time">
                      <div className="rating-a">Rating :{item.rating}</div>
                      <div>{item.create_time}</div>
                    </div>
                    <div className="comment">Comment: {item.comment}</div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div style={{textAlign:'center'}}><h3>No comment</h3></div>
          )}
        </div>

        <div className="review">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Comment</Form.Label>
            <Form.Control type="text" placeholder="Enter comment" onChange={(e) => setComment(e.target.value.trim())} />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Rating</Form.Label>
            <select
              value={rating}
              onChange={(e) => {
                console.log(e.target.value.trim());
                setRating(Number(e.target.value.trim()));
              }}
            >
              <option value={5}>5</option>
              <option value={4}>4</option>
              <option value={3}>3</option>
              <option value={2}>2</option>
              <option value={1}>1</option>
            </select>
          </Form.Group>

          <div>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Add Review
            </Button>

            <Button className="d-close" variant="info" type="submit" onClick={() => props.onClose && props.onClose()}>
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardItem = (props) => {
  const { info } = props;

  const handleDetail = () => {
    console.log(info);
    props.onShow && props.onShow(info);
  };
  return (
    <div className="cardItem">
      <div className="title">{info.name}</div>
      <div className="address">
        Address:　
        <span>
          {info.street} {info.city} {info.state}
        </span>
      </div>
      <div>Postalcode: {info.postalcode}</div>

      <div className="btns">
        <div className="other"></div>
        <div className="btn btn-primary btn-sm" onClick={handleDetail}>
          Detail
        </div>
      </div>
    </div>
  );
};

function Home(props) {
  const [place, setPlace] = useState(null);
  const [list, setList] = useState([]);

  const handleResult = (data) => {
    setList(data);
  };

  console.log('-----home------', place);
  return (
    <>
      <HeroSection onSearchResult={handleResult} />
      <div className="body">
        <div className="result">
          {list &&
            list.length > 0 &&
            list.map((row, index) => {
              // console.log(row);
              return <CardItem {...props} info={row} key={index} onShow={() => setPlace(row)}></CardItem>;
            })}
        </div>
      </div>

      {place && place.id > 0 && <PlaceDetailDialog info={place} {...props} onClose={() => setPlace(null)} />}
    </>
  );
}

export default Home;
