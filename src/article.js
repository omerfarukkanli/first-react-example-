import React, { Component } from "react";
import css from "./css/main.css";
export default class extends Component {
  render() {
    return (
      <div>
        <div>
          <p class="ana">Hello,I'm frontend developer based in Turkey</p>
        </div>
        <h2 class="deneme">ÖMER FARUK KANLI</h2>
        <p>Teknologist(Frontend Developer)</p>
        <div class="bio">
            <h3 class="baslik">Bio</h3>
            <div class="bio">
                <div class="born">
                    <span>1999</span>I was Born in Sakarya Turkey
                </div>
                <div class="school">
                    <span>2019</span>I'm currently studying Computer Engineering in Duzce University
                </div>
                <div class="work">
                    <span>Dec 2021</span>  I started to work at DogGo as a Frontend developer
                </div>
            </div>
        </div>
        <div class="work">
            <h3 class="baslik">Work</h3>
            <div class="works">
                <ul class="work-list">
                    <li>Continuous Integration with Gitlab</li>
                    <li>High-quality product supported with ATDD/TDD, integration tests, unit tests, CDC tests</li>
                    <li>Highly scalable microservice architecture</li>
                    <li>Restful API with Golang</li>
                    <li>Database migrations for services</li>
                    <li>Micro Frontend architecture by Vue</li>
                    <li>Pair Programming</li>
                    <li>Agile work model</li>
                </ul>
            </div>
        </div>
        <div class="sevme">
            <h3 class="baslik">I <i class="fa-solid fa-heart"></i></h3>
            <p>Playing, Photography, Skating, Riding a bike</p>
        </div>
        <div class="context">
            <h3 class="baslik">On The Web</h3>
            <div class="web">
                <ul>
                    <li><a href="https://github.com/" target="_blank"><i class="fa-brands fa-github"></i>github</a></li>
                    <li><a href="https://about.gitlab.com/"target="_blank"><i class="fa-brands fa-gitlab"></i>gitlab</a></li>
                    <li><a href="https://twitter.com/home?lang=tr"target="_blank"><i class="fa-brands fa-twitter"></i>twitter</a></li>
                    <li><a href="https://www.instagram.com/?hl=tr"target="_blank"><i class="fa-brands fa-instagram"></i>instagram</a></li>
                </ul>
            </div>
        </div>
    </div>
    );
  }
}
