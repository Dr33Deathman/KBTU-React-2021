import { Link, useParams } from 'react-router-dom';

export default function Friends() {

  const friends = [
    {
      name: 'Vanya',
      age: 20,
      country: 'Kazakhstan',
    },
    {
      name: 'Demands',
      age: 21,
      country: 'Russia',
    },
    {
      name: 'Maxim',
      age: 21,
      country: 'Russia',
    },
    {
      name: 'Ilya',
      age: 19,
      country: 'Russia',
    },
    {
      name: 'Daniil',
      age: 20,
      country: 'Kazakhstan',
    },
    {
      name: 'Ernazar',
      age: 20,
      country: 'Kazakhstan',
    },
    {
      name: 'Ernur',
      age: 19,
      country: 'Kazakhstan',
    },
  ];

  const { friend } = useParams();

  const getFriend = (name) => {
    const index = friends.findIndex(f => f.name === name);
    return friends[index === -1 ? 0 : index];
  }

  const selectedFriend = getFriend(friend);

  return (
    <div>
      <h1>
        Welcome to the friends page!
      </h1>

      <main className="friends-wrapper">
        <ul className="friends-list">
          {friends.map((f, k) => 
            <li key={k}>
              <Link to={`/friends/${f.name}`}>{f.name}</Link>
            </li>
          )}
        </ul>
        {selectedFriend && <div className="chosen-friend">
          <div className="card">
            <img src={`https://via.placeholder.com/350x150?text=${selectedFriend.name}`} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{selectedFriend.name}</h5>
              <p className="card-text">
                <strong>Age</strong>: {selectedFriend.age}
                <br/>
                <strong>country</strong>: {selectedFriend.country}
              </p>
            </div>
          </div>
        </div>}
      </main >
    </div >
  )
}