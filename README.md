<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

## Ejecutar en desarrollo

1. Ejecutar en desarrollo

2. Ejecutar:
```bash
npm install
```
3. Tener Nest CLI instalado
```bash
npm install -g @nestjs/cli
```
4. Levantar la base de datos
```bash
docker-compose up -d
```

5. Clonar el archivo ```.env.template``` y renombrar la copia a ```.env```

6. Llenar las variables de entorno definidas en el ```.env```

7. Ejecutar la aplicacion en desarrollo:
```bash
npm run start:dev
```


8. Reconstruir la base de datos
```bash
http://localhost:3000/api/v2/seed/<amount>
```


## Stack

* Nest
* MongoDB

# Production Build

1. Crear el archivo ```.env.prod```
2. Llenar las variables de entorno de produccion
3. Crear la nueva imagen
```bash
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```




