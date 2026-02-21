import Image from "next/image";
import { Avatar, Box, Button, Container, Grid, Paper, Rating, Stack, Typography } from "@mui/material";
import { ProductCard } from "@/components/ui/ProductCard";
import { products } from "@/lib/mock/products";

export const HomePageView = () => {
  const productGrid = products.slice(0, 8);
  const popular = products.slice(8, 12);
  const testimonials = [
    {
      name: "Luisa",
      text: "I love it! No more air fresheners.",
      image: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/12565be2-4e7a-41a8-898f-5b61bc26c7e8",
      score: 5,
    },
    {
      name: "Edoardo",
      text: "Raccomended for everyone.",
      image: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ac3ddd92-f4a4-49a4-9c43-17408b302262",
      score: 5,
    },
    {
      name: "Mart",
      text: "Looks very natural, the smell is awesome.",
      image: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2a3b7b43-82e1-4580-8c34-16801fa20123",
      score: 4,
    },
  ];
  const heroBg =
    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b9ee6666-1b69-41f3-a99f-103aade134b4";
  const benefitsImage =
    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/06e77263-7b83-46fa-9b28-bb5efc56e4a5";

  return (
    <Stack>
      <Box
        sx={{
          minHeight: 705,
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
          px: 2,
        }}
      >
        <Paper
          sx={{
            width: "100%",
            maxWidth: 730,
            minHeight: 349,
            borderRadius: "2px",
            backdropFilter: "blur(24px)",
            backgroundColor: "rgba(247,248,250,0.8)",
            display: "grid",
            placeItems: "center",
            textAlign: "center",
            p: 3,
          }}
          elevation={0}
        >
          <Stack spacing={2} maxWidth={540} alignItems="center">
            <Typography sx={{ fontSize: { xs: 34, md: 40 }, lineHeight: 1.2, color: "#1D2530" }}>
              🌱 <br />
              The nature candle
            </Typography>
            <Typography sx={{ fontSize: 18, lineHeight: "26px", color: "#1D2530" }}>
              All handmade with natural soy wax, Candleaf is a companion for all your pleasure
              moments
            </Typography>
            <Button href="/products" variant="contained" sx={{ width: 310, height: 40 }}>
              Discovery our collection
            </Button>
          </Stack>
        </Paper>
      </Box>

      <Container maxWidth="lg" sx={{ py: "100px" }}>
        <Stack spacing={2} alignItems="center" textAlign="center" mb={5}>
          <Typography sx={{ fontSize: 40, lineHeight: "58px", color: "#0B254B" }}>Products</Typography>
          <Typography sx={{ fontSize: 18, lineHeight: "28px", color: "#5E6E89" }}>
            Order it for you or for your beloved ones
          </Typography>
        </Stack>
        <Grid container spacing={2.5}>
          {productGrid.map((product) => (
            <Grid key={product.id} size={{ xs: 12, sm: 6, md: 3 }}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ backgroundColor: "#F7F8FA", py: { xs: 8, md: "100px" } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 5 }}>
              <Stack spacing={2}>
                <Typography sx={{ fontSize: 40, lineHeight: "47px", color: "#1D2530" }}>
                  Clean and fragrant soy wax
                </Typography>
                <Typography sx={{ fontSize: 16, color: "#56B281" }}>
                  Made for your home and for your wellness
                </Typography>
                <Typography sx={{ fontSize: 16, lineHeight: "29px" }}>
                  • Eco-sustainable:All recyclable materials, 0% CO2 emissions
                </Typography>
                <Typography sx={{ fontSize: 16, lineHeight: "29px" }}>
                  • Hyphoallergenic: 100% natural, human friendly ingredients
                </Typography>
                <Typography sx={{ fontSize: 16, lineHeight: "29px" }}>
                  • Handmade: All candles are craftly made with love.
                </Typography>
                <Typography sx={{ fontSize: 16, lineHeight: "29px" }}>
                  • Long burning: No more waste. Created for last long.
                </Typography>
                <Box>
                  <Button href="/products" variant="contained" sx={{ width: 194, height: 40 }}>
                    Learn more
                  </Button>
                </Box>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Box sx={{ position: "relative", width: "100%", height: 377 }}>
                <Image
                  src={benefitsImage}
                  alt="Benefits"
                  fill
                  style={{ objectFit: "contain" }}
                  sizes="(max-width: 900px) 100vw, 540px"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ backgroundColor: "rgba(86,178,129,0.1)", py: "90px" }}>
        <Container maxWidth="lg">
          <Stack spacing={2} alignItems="center" textAlign="center" mb={5}>
            <Typography sx={{ fontSize: 40, lineHeight: "58px", color: "#0B254B" }}>
              Testimonials
            </Typography>
            <Typography sx={{ fontSize: 18, lineHeight: "28px", color: "#5E6E89" }}>
              Some quotes from our happy customers
            </Typography>
          </Stack>
          <Grid container spacing={3}>
            {testimonials.map((item) => (
              <Grid key={item.name} size={{ xs: 12, md: 4 }}>
                <Paper sx={{ p: 3, borderRadius: 2 }} elevation={0}>
                  <Stack spacing={2} alignItems="center" textAlign="center">
                    <Avatar src={item.image} sx={{ width: 84, height: 84 }} />
                    <Rating value={item.score} readOnly />
                    <Typography sx={{ fontSize: 22, lineHeight: "26px", color: "#1D293F" }}>
                      &quot;{item.text}&quot;
                    </Typography>
                    <Typography sx={{ color: "#7C8087" }}>{item.name}</Typography>
                  </Stack>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: "90px" }}>
        <Stack spacing={2} alignItems="center" textAlign="center" mb={5}>
          <Typography sx={{ fontSize: 40, lineHeight: "58px", color: "#0B254B" }}>Popular</Typography>
          <Typography sx={{ fontSize: 18, lineHeight: "28px", color: "#5E6E89" }}>
            Our top selling product that you may like
          </Typography>
        </Stack>
        <Grid container spacing={2.5}>
          {popular.map((product) => (
            <Grid key={product.id} size={{ xs: 12, sm: 6, md: 3 }}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Stack>
  );
};
