import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CustomNavbar from './NavBar';
import AuthForm from './AuthForm';
import Search from './Search';
import Results from './SearchResults';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

function HomePage() {
  const [currentUser, setCurrentUser] = useState(null); // `null` means loading
  const [registrationToggle, setRegistrationToggle] = useState(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    client.get("/users/user")
      .then(function(res) {
        setCurrentUser(true);
      })
      .catch(function(error) {
        setCurrentUser(false);
      });
  }, []);

  function updateFormButton() {
    setRegistrationToggle(prev => !prev);
  }

  function submitRegistration(e) {
    e.preventDefault();
    client.post(
      "/users/register",
      { email, username, password }
    ).then(() => {
      client.post(
        "/users/login",
        { email, password }
      ).then(() => setCurrentUser(true));
    });
  }

  function submitLogin(e) {
    e.preventDefault();
    client.post(
      "/users/login",
      { email, password }
    ).then(() => setCurrentUser(true));
  }

  function submitLogout(e) {
    e.preventDefault();
    client.post(
      "/users/logout",
      { withCredentials: true }
    ).then(() => setCurrentUser(false));
  }

  function handleSearch(e) {
    e.preventDefault();
    client.get(`/search?query=${searchQuery}`)
      .then(function(res) {
        setResults(res.data);
      })
      .catch(function(error) {
        console.error("Error fetching search results:", error);
      });
  }

  if (currentUser === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <CustomNavbar
        currentUser={currentUser}
        onToggleForm={updateFormButton}
        onLogout={submitLogout}
      />
      <Search
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearch={handleSearch}
      />
      <Results results={results} />
      {!currentUser && registrationToggle && (
        <AuthForm
          isRegistering={true}
          email={email}
          username={username}
          password={password}
          setEmail={setEmail}
          setUsername={setUsername}
          setPassword={setPassword}
          onSubmit={submitRegistration}
        />
      )}
      {!currentUser && !registrationToggle && (
        <AuthForm
          isRegistering={false}
          email={email}
          username={username}
          password={password}
          setEmail={setEmail}
          setUsername={setUsername}
          setPassword={setPassword}
          onSubmit={submitLogin}
        />
      )}
    </div>
  );
}

export default HomePage;
