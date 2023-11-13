import React, { Fragment, useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ScrollAnimation from "react-scroll-animation-wrapper";
import { useSpring, animated } from "react-spring";
import { useTranslation } from "next-i18next";
import { useText } from "~/theme/common";
import useStyles from "./expertise-style";
import useTitle from "../Title/title-style";
import TitleDeco from "../Title/WithDecoration";
import sonoco from "../../public/images/logos/sonoco.png";
import forestaling from "../../public/images/logos/asesoriasforestales.png";
import megadev from "../../public/images/logos/megadev.png";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;

function Expertise() {
  const [loaded, setLoaded] = useState(false);
  // Theme breakpoints
  const theme = useTheme();
  const { classes: text } = useText();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  // Translate Function
  const { t } = useTranslation("common");

  const { classes, cx } = useStyles();
  const { classes: title } = useTitle();

  const [position, setPosition] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 50, tension: 550, friction: 140 },
  }));
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Fragment>
      <svg
        fill="#cccccc"
        width={845}
        height={1099}
        className={classes.background}
      >
        <use xlinkHref="/images/decoration/square-deco-primary.svg#square" />
      </svg>
      <div className={classes.root}>
        <Container
          fixed
          onMouseMove={({ clientX: x, clientY: y }) =>
            setPosition({ xy: calc(x, y) })
          }
        >
          <Grid container spacing={6}>
            {isDesktop && <Grid item lg={1} />}
            <Grid item md={4} xs={12}>
              <div className={classes.titleDeco}>
                {isDesktop && (
                  <svg
                    fill="#cccccc"
                    width={845}
                    height={1099}
                    className={classes.decoration}
                  >
                    <use xlinkHref="/images/agency/wave_decoration.svg#main" />
                  </svg>
                )}
                <TitleDeco text={t("agency-landing.expertise_title")} />
                {loaded && isDesktop && (
                  <ScrollAnimation
                    animateOnce
                    animateIn="zoomInShort"
                    offset={-100}
                    delay={100}
                    duration={0.6}
                  >
                    <div className={classes.parallaxWrap}>
                      <animated.div
                        style={{ transform: position.xy.interpolate(trans1) }}
                      >
                        <span className={classes.iconGreen} />
                      </animated.div>
                      <animated.div
                        style={{ transform: position.xy.interpolate(trans2) }}
                      >
                        <span className={classes.iconViolet} />
                      </animated.div>
                      <animated.div
                        style={{ transform: position.xy.interpolate(trans3) }}
                      >
                        <span className={classes.iconBlue} />
                      </animated.div>
                    </div>
                  </ScrollAnimation>
                )}
              </div>
            </Grid>
            <Grid item lg={7} md={8} xs={12}>
              <Typography
                className={cx(title.default, text.subtitle)}
                variant="h4"
              >
                {t("agency-landing.expertise_subtitle")}
              </Typography>
              <Typography className={cx(classes.desc, text.paragraph)}>
                {t("agency-landing.expertise_paragraph")}
              </Typography>
              {!isTablet && (
                <div className={classes.runningTag}>
                  <img src={sonoco} alt="" style={{ width: 100 }} />
                  <img src={megadev} alt="" style={{ width: 100 }} />
                  <img src={forestaling} alt="" style={{ width: 100 }} />
                </div>
              )}
            </Grid>
          </Grid>
        </Container>
      </div>
    </Fragment>
  );
}

export default Expertise;
