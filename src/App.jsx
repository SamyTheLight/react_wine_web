import { useMemo } from 'react'
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material'

import './App.css'

const featuredWines = [
  {
    name: 'Reserva Garnacha',
    description: 'Notas de frutos rojos y toques especiados, ideal para carnes y quesos curados.',
    price: '18 €',
    image:
      'https://images.unsplash.com/photo-1527169402691-feff5539e52c?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Chardonnay de la Casa',
    description: 'Blanco fresco y aromático con final cítrico. Perfecto para pescados y pastas.',
    price: '14 €',
    image:
      'https://images.unsplash.com/photo-1509600110300-75b9ae05e2b5?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Rosado de Viñedo',
    description: 'Aromas florales y acidez equilibrada para brindar en cualquier ocasión.',
    price: '12 €',
    image:
      'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=900&q=80',
  },
]

const experiences = [
  {
    title: 'Cata guiada',
    description: 'Descubre la historia de cada etiqueta acompañado de un sumiller.',
    price: '25 €/persona',
  },
  {
    title: 'Visita al viñedo',
    description: 'Recorre las cepas al atardecer y conoce nuestro proceso de vinificación.',
    price: '35 €/persona',
  },
  {
    title: 'Club del vino',
    description: 'Suscripción mensual con selección de vinos y encuentros exclusivos.',
    price: 'Desde 30 €/mes',
  },
]

const App = () => {
  const year = useMemo(() => new Date().getFullYear(), [])

  return (
    <Box>
      <AppBar position="sticky" color="primary" enableColorOnDark>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Bodega Aurora
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button color="inherit" href="#inicio">
              Inicio
            </Button>
            <Button color="inherit" href="#historia">
              Historia
            </Button>
            <Button color="inherit" href="#precios">
              Precios
            </Button>
            <Button color="inherit" href="#contacto">
              Contacto
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>

      <Box
        id="inicio"
        sx={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45)), url(https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          py: { xs: 10, md: 14 },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography variant="overline" sx={{ letterSpacing: 2 }}>
                Edición especial 2025
              </Typography>
              <Typography variant="h2" component="h1" gutterBottom>
                Vinos hechos para celebrar momentos únicos
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, maxWidth: 520 }}>
                Una selección cuidada de viñedos mediterráneos, fermentación lenta y respeto
                absoluto por la tierra para obtener sabores auténticos.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button variant="contained" color="secondary" size="large" href="#precios">
                  Ver precios
                </Button>
                <Button variant="outlined" color="inherit" size="large" href="#contacto">
                  Reservar visita
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} md={5}>
              <Card sx={{ bgcolor: 'rgba(255,255,255,0.92)', color: 'text.primary' }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom fontWeight={700}>
                    Destacados de la temporada
                  </Typography>
                  <Stack spacing={2}>
                    {featuredWines.map((wine) => (
                      <Stack
                        key={wine.name}
                        direction="row"
                        spacing={2}
                        alignItems="center"
                        sx={{ borderBottom: '1px solid', borderColor: 'divider', pb: 2 }}
                      >
                        <Box
                          component="img"
                          src={wine.image}
                          alt={wine.name}
                          sx={{ width: 64, height: 64, borderRadius: 2, objectFit: 'cover' }}
                        />
                        <Box>
                          <Typography variant="subtitle1" fontWeight={700}>
                            {wine.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {wine.description}
                          </Typography>
                          <Typography variant="subtitle2" color="primary" fontWeight={700}>
                            {wine.price}
                          </Typography>
                        </Box>
                      </Stack>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container id="historia" maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="overline" color="primary" sx={{ letterSpacing: 2 }}>
              Nuestra historia
            </Typography>
            <Typography variant="h4" gutterBottom>
              Tres generaciones dedicadas al vino
            </Typography>
            <Typography variant="body1" paragraph>
              Bodega Aurora nace en una colina bañada por el sol mediterráneo. Combinamos técnicas
              tradicionales con innovación para preservar el carácter de cada vendimia.
            </Typography>
            <Typography variant="body1" paragraph>
              Organizamos catas privadas, visitas guiadas y experiencias gastronómicas en nuestra
              sala de barricas. Cada botella cuenta una historia que queremos compartir contigo.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 2 }}>
              <Button variant="contained" color="primary" href="#contacto">
                Agenda una cata
              </Button>
              <Button variant="text" color="primary" href="#precios">
                Descargar tarifas
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardMedia
                component="img"
                height="360"
                image="https://images.unsplash.com/photo-1504306661982-16b934ac41b0?auto=format&fit=crop&w=1200&q=80"
                alt="Viñedo al atardecer"
              />
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Box id="precios" sx={{ bgcolor: 'background.paper', py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Stack spacing={3} sx={{ mb: 4 }}>
            <Typography variant="overline" color="primary" sx={{ letterSpacing: 2 }}>
              Tarifas y experiencias
            </Typography>
            <Typography variant="h4" component="h2">
              Planes pensados para cada brindis
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 640 }}>
              Elige entre nuestras etiquetas o vive una visita completa a la bodega. Todos los
              precios incluyen asesoría personalizada y maridajes sugeridos.
            </Typography>
          </Stack>

          <Grid container spacing={3}>
            {experiences.map((experience) => (
              <Grid item xs={12} md={4} key={experience.title}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom fontWeight={700}>
                      {experience.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {experience.description}
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <Typography variant="subtitle1" color="primary" fontWeight={700}>
                      {experience.price}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Container id="contacto" maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="overline" color="primary" sx={{ letterSpacing: 2 }}>
              Contacto
            </Typography>
            <Typography variant="h4" gutterBottom>
              ¿Organizamos tu próxima visita?
            </Typography>
            <Typography variant="body1" paragraph>
              Envíanos un mensaje y coordinaremos una cata, evento o pedido especial. Respondemos en
              menos de 24 horas.
            </Typography>

            <Stack component="form" spacing={2} sx={{ mt: 2 }}>
              <TextField label="Nombre" required fullWidth />
              <TextField label="Correo" type="email" required fullWidth />
              <TextField label="Mensaje" required fullWidth multiline minRows={4} />
              <Button variant="contained" size="large" color="primary">
                Enviar mensaje
              </Button>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" gutterBottom fontWeight={600}>
              Encuéntranos aquí
            </Typography>
            <Box
              component="iframe"
              title="Ubicación en mapa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48372.560027470574!2d-3.7355327332045263!3d40.43786987591501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997823b6f11%3A0x61f167a1e0b08507!2sChamber%C3%AD%2C%20Madrid!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              sx={{ border: 0, width: '100%', height: 360, borderRadius: 2, boxShadow: 3 }}
            />
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', py: 3 }}>
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
            alignItems={{ xs: 'flex-start', sm: 'center' }}
            spacing={2}
          >
            <Typography variant="subtitle1">© {year} Bodega Aurora</Typography>
            <Stack direction="row" spacing={2}>
              <Button color="inherit" size="small">
                Instagram
              </Button>
              <Button color="inherit" size="small">
                Newsletter
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}

export default App
