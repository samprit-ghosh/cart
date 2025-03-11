import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  TextField,
  IconButton,
  styled
} from "@mui/material";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube
} from "react-icons/fa";

const FooterContainer = styled(Box)(({ theme }) => ({
  background: "linear-gradient(45deg, #1a237e 30%, #283593 90%)",
  color: "#ffffff",
  padding: "40px 0",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.25)",
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
    padding: "64px 0"
  }
}));

const FooterTitle = styled(Typography)({
  fontWeight: 600,
  marginBottom: "20px",
  fontSize: "1.2rem"
});

const FooterLink = styled(Typography)({
  cursor: "pointer",
  marginBottom: "10px",
  transition: "color 0.3s ease, transform 0.3s ease",
  "&:hover": {
    color: "#90caf9",
    transform: "translateX(4px)"
  }
});

const NewsletterForm = styled(Box)({
  marginTop: "16px"
});

const GetStartedButton = styled(Button)({
  background: "linear-gradient(45deg, #ff6b6b 30%, #ff8e8e 90%)",
  borderRadius: "30px",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 48,
  padding: "0 30px",
  marginTop: "16px",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)"
  }
});

const SocialIcon = styled(IconButton)(({ theme }) => ({
  color: "#ffffff",
  margin: "0 6px",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.2)",
    color: "#90caf9"
  },
  [theme.breakpoints.down("sm")]: {
    margin: "4px"
  }
}));

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <FooterContainer component="footer">
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {/* Company Overview */}
          <Grid item xs={12} sm={6} md={3}>
            <FooterTitle variant="h6">Company Overview</FooterTitle>
            <FooterLink variant="body2">About Us</FooterLink>
            <FooterLink variant="body2">Our Mission</FooterLink>
            <FooterLink variant="body2">Team</FooterLink>
            <FooterLink variant="body2">Careers</FooterLink>
          </Grid>

          {/* Product Features */}
          <Grid item xs={12} sm={6} md={2}>
            <FooterTitle variant="h6">Product Features</FooterTitle>
            <FooterLink variant="body2">Solutions</FooterLink>
            <FooterLink variant="body2">Integrations</FooterLink>
            <FooterLink variant="body2">Pricing</FooterLink>
            <FooterLink variant="body2">Updates</FooterLink>
          </Grid>

          {/* Support & FAQ */}
          <Grid item xs={12} sm={6} md={2}>
            <FooterTitle variant="h6">Support & FAQ</FooterTitle>
            <FooterLink variant="body2">Help Center</FooterLink>
            <FooterLink variant="body2">Documentation</FooterLink>
            <FooterLink variant="body2">Community</FooterLink>
            <FooterLink variant="body2">Contact Us</FooterLink>
          </Grid>

          {/* Partners */}
          <Grid item xs={12} sm={6} md={2}>
            <FooterTitle variant="h6">Partners</FooterTitle>
            <FooterLink variant="body2">Partner Program</FooterLink>
            <FooterLink variant="body2">Partner Portal</FooterLink>
            <FooterLink variant="body2">Marketplace</FooterLink>
            <FooterLink variant="body2">Case Studies</FooterLink>
          </Grid>

          {/* Newsletter Signup & Social Media */}
          <Grid item xs={12} md={3}>
            <FooterTitle variant="h6">Stay Connected</FooterTitle>
            <NewsletterForm component="form" onSubmit={handleSubmit}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "4px",
                  input: { color: "#ffffff" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "rgba(255, 255, 255, 0.3)"
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(255, 255, 255, 0.5)"
                    }
                  }
                }}
              />
              <GetStartedButton type="submit" fullWidth>
                Get Started
              </GetStartedButton>
            </NewsletterForm>

            {/* Social Media Icons */}
            <Box mt={3} display="flex" justifyContent="center">
              <SocialIcon aria-label="facebook">
                <FaFacebook />
              </SocialIcon>
              <SocialIcon aria-label="twitter">
                <FaTwitter />
              </SocialIcon>
              <SocialIcon aria-label="instagram">
                <FaInstagram />
              </SocialIcon>
              <SocialIcon aria-label="linkedin">
                <FaLinkedin />
              </SocialIcon>
              <SocialIcon aria-label="youtube">
                <FaYoutube />
              </SocialIcon>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box mt={5} textAlign="center">
          <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
            © {new Date().getFullYear()} Your Company Name. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
