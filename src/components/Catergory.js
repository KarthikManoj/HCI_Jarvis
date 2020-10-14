import React, { Component } from "react";
import ReactRoundedImage from "react-rounded-image";
import { CardTitle } from 'reactstrap';

import bio from "./Images/bio.png";
import clip from "./Images/clip.png";
import hist from "./Images/history.jpg";
import tree from "./Images/tree.png";
import sci from "./Images/sci.png";
import roman from "./Images/romantic.png";


class Catergory extends Component {
  render() {
    return (

       <div>
           <br />
            <h2 style={{
                font: "20px"}}><b>
                Shop by Catergory</b></h2>
            <br />
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>

            {/* <ReactRoundedImage image={MyPhoto} /> */}
            
            <a href="/addCart">
                <ReactRoundedImage
                image={roman}
                roundedColor=""
                imageWidth="150"
                imageHeight="150"
                roundedSize="13"
                borderRadius="70"
                />
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <CardTitle>Romance</CardTitle>
                </div>
            </a>
            
            <a href="/addCart">
            <ReactRoundedImage
            image={clip}
            roundedColor=""
            imageWidth="150"
            imageHeight="150"
            roundedSize="13"
            borderRadius="70"
            />
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
            <CardTitle>Novels</CardTitle>
            </div>
            </a>

            <a href="/addCart">
            <ReactRoundedImage
            image={tree}
            roundedColor=""
            imageWidth="150"
            imageHeight="150"
            roundedSize="13"
            borderRadius="70"
            />
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
            <CardTitle>Business </CardTitle>
            </div>
            </a>
            
            <a href="/addCart">
            <ReactRoundedImage
            image={sci}
            roundedColor=""
            imageWidth="150"
            imageHeight="150"
            roundedSize="13"
            borderRadius="70"
            />
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
            <CardTitle>Sci-fi</CardTitle>
            </div>
            </a>

            <a href="/addCart">
            <ReactRoundedImage
            image={hist}
            roundedColor=""
            imageWidth="150"
            imageHeight="150"
            roundedSize="13"
            borderRadius="70"
            />
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
            <CardTitle>History</CardTitle>
            </div>
            </a>

            <a href="/addCart">
            <ReactRoundedImage
            image={bio}
            roundedColor=""
            imageWidth="150"
            imageHeight="150"
            roundedSize="13"
            borderRadius="70"
            />
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
            <CardTitle>Biography</CardTitle>
            </div>
            </a>

            {/* <ReactRoundedImage
            image={MyPhoto}
            roundedColor="#66A5CC"
            imageWidth="120"
            imageHeight="120"
            roundedSize="8"
            borderRadius="15"
            />

            <ReactRoundedImage image={MyPhoto} roundedSize="0" imageWidth="110" imageHeight="110" /> */}
        </div>
      </div>
    );
  }
}

export default Catergory;