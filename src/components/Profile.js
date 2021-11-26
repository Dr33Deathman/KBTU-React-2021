import { useParams } from "react-router"

export default function Profile() {
  const { profile } = useParams();

  return (
    <section class="container">
      <h1>Profile page</h1>
      <main class="profile-wrapper">
        <img src="https://via.placeholder.com/150?text=Kamran" alt="" style={{marginRight: 50}} />
        <div>
          <h2>Kamran FIT Student</h2>
          <p>20 years old...</p>
        </div>
      </main>
    </section>
  )
}