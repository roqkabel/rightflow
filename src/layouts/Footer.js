import React from "react";
// Footer component
export default function Footer() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light p-3 bg-light">
      <div className="container">
        <a class="navbar-brand text-primary text-sm" href="#">
          Copy &copy; 2019
        </a>

        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link text-sm" href="#">
                Learn about product
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-sm" href="#">
                &middot; More Products
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-sm" href="#">
                &middot; Go to Main Products
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
