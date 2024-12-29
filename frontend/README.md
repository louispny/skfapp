# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.





# Guide d'installation et d'utilisation du projet

Ce projet utilise Angular pour le front-end et Python (FastAPI) pour le back-end. Voici les étapes pour configurer l'environnement sur Windows.

---

## Prérequis

### Général
1. **Git** : Téléchargez et installez [Git](https://git-scm.com/).
2. **Node.js** : Téléchargez et installez [Node.js](https://nodejs.org/).
3. **Python** : Téléchargez et installez [Python 3.9+](https://www.python.org/), et assurez-vous de cocher l'option "Ajouter Python au PATH" lors de l'installation.

### Angular (Front-end)
1. Installez Angular CLI :
   ```bash
   npm install -g @angular/cli
   ```
2. Vérifiez l'installation :
   ```bash
   ng version
   ```

### Python (Back-end)
1. Installez un environnement virtuel :
   ```bash
   pip install virtualenv
   ```
2. Créez un environnement virtuel :
   ```bash
   python -m venv env
   ```
3. Activez l'environnement virtuel :
   ```bash
   .\env\Scripts\activate
   ```
   **Note :** Pour désactiver l'environnement virtuel, utilisez la commande :
   ```bash
   deactivate
   ```

---

## Installation des dépendances

### Angular (Front-end)
1. Accédez au dossier du front-end :
   ```bash
   cd front-end
   ```
2. Installez les dépendances Node.js :
   ```bash
   npm install
   ```

### Python (Back-end)
1. Accédez au dossier du back-end :
   ```bash
   cd back-end
   ```
2. Activez l'environnement virtuel (si ce n'est pas déjà fait) :
   ```bash
   .\env\Scripts\activate
   ```
3. Installez les dépendances Python :
   ```bash
   pip install -r requirements.txt
   ```

---

## Lancer le projet

### Angular (Front-end)
1. Accédez au dossier du front-end :
   ```bash
   cd front-end
   ```
2. Démarrez le serveur de développement Angular :
   ```bash
   ng serve
   ```
3. Ouvrez votre navigateur et accédez à :
   ```
   http://localhost:4200
   ```

### Python (Back-end)
1. Accédez au dossier du back-end :
   ```bash
   cd back-end
   ```
2. Activez l'environnement virtuel (si ce n'est pas déjà fait) :
   ```bash
   .\env\Scripts\activate
   ```
3. Lancez le serveur FastAPI :
   ```bash
   uvicorn app.main:app --reload
   ```
4. Ouvrez votre navigateur et accédez à la documentation interactive de l'API :
   ```
   http://127.0.0.1:8000/docs
   ```

---

## Notes supplémentaires

- **Gestion des fichiers téléchargés** : Les fichiers téléchargés via l'API seront enregistrés dans le dossier `uploads` à la racine du projet back-end.
- **Ports par défaut** :
  - Front-end : `4200`
  - Back-end : `8000`
- Si vous rencontrez des problèmes, vérifiez que tous les chemins (par exemple, `requirements.txt` ou `env`) sont corrects et utilisez des commandes adaptées à votre shell (cmd, PowerShell, ou Git Bash).

---

## Commandes utiles

### Angular
- Pour générer un nouveau composant :
  ```bash
  ng generate component component-name
  ```
- Pour générer un nouveau service :
  ```bash
  ng generate service service-name
  ```

### Python
- Pour installer un nouveau package Python :
  ```bash
  pip install package-name
  ```
  Et mettez à jour `requirements.txt` :
  ```bash
  pip freeze > requirements.txt
  ```

