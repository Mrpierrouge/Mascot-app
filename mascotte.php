<?php
    require_once "connec.php";

    $requete = $database->prepare("SELECT * FROM corps ");
    $requete->execute();
    $AllCorps = $requete->fetchAll(PDO::FETCH_ASSOC);

    $requete = $database->prepare("SELECT * FROM visage ");
    $requete->execute();
    $AllVisage = $requete->fetchAll(PDO::FETCH_ASSOC);

    $requete = $database->prepare("SELECT * FROM sport ");
    $requete->execute();
    $AllSport = $requete->fetchAll(PDO::FETCH_ASSOC);

    $requete = $database->prepare("SELECT * FROM hat ");
    $requete->execute();
    $AllHat = $requete->fetchAll(PDO::FETCH_ASSOC);

    $requete = $database->prepare("SELECT * FROM background ");
    $requete->execute();
    $AllBackground = $requete->fetchAll(PDO::FETCH_ASSOC);

    ?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <form action="insert-mascotte.php" method="get">
    <div class="content">
      <div class="left">
        <img src="images/logo.png" alt="" class="logoJO" />
        <div class="mascotte">
          <img src="images/test.png" alt="" class="test" />
        </div>
      </div>
      <div class="right">
        <div class="icons">
          <div class="round " id="colors">
            <img
              src="images/icons/colors.png"
              alt=""
              class="icon color opacity"
            />
          </div>
          <div class="round " id="eyes">
            <img src="images/icons/eyes.png" alt="" class="icon eye opacity" />
          </div>
          <div class="round " id="hats">
            <img src="images/icons/hat.png" alt="" class="icon hat opacity" />
          </div>
          <div class="round " id="sports">
            <img
              src="images/icons/sports.png"
              alt=""
              class="icon sport opacity"
            />
          </div>
          <div class="round " id="pictures">
            <img
              src="images/icons/picture.png"
              alt=""
              class="icon picture opacity"
            />
          </div>
          <div class="round" id="share">
            <img
              src="images/icons/share.png"
              alt=""
              class="icon share opacity"
            />
          </div>
        </div>

        
        <div class="choices">
          <div class="mobileIcon mobileIconBlue">
            <p id="mobileForme" class="opacity mobile">Forme</p>
            <p id="mobileEmotion" class="opacity mobile" >Emotion </p>
            <p id="mobileAccessoire" class="opacity mobile">Accessoire </p>
            <p id="mobileSport" class="opacity mobile">Sport </p>
            <p id="mobileFond" class="opacity mobile" >Fond</p>
            <p id="mobilePartager" class="opacity mobile">Partager</p>
          </div>

          <div class="colors">
            <div class="divRounds">
              <div class="roundColors rouge"></div>
              <div class="roundColors orange "></div>
              <div class="roundColors vert "></div>
              <div class="roundColors bleu "></div>
              <div class="roundColors noir "></div>
            </div>
      
            <?php foreach ($AllCorps as $corps): ?>
            <div class="box">
              <label class="labelexpanded">
                  <div><img src="img/Formes/rouge/<?= $corps['lien'] ?>" alt=""></div>
                  <input class="input-btn" type="radio" value="<?= $corps['lien'] ?>" name="corps">
              </label>
            </div>
            <?php endforeach ?>
          </div>

          <div class="eyes hidden">
            <div class="box"></div>
          </div>

          <div class="hats hidden">
          <?php foreach ($AllHat as $hat): ?>
              <div class="box">
                <label class="labelexpanded">
                    <img src="img/hat/<?= $hat['lien'] ?>" alt="">
                    <input class="input-btn" type="radio" value="<?= $hat['lien'] ?>" name="hat">
                </label>
              </div>
          <?php endforeach ?>
          </div>

          <div class="sports hidden">
            <?php foreach ($AllSport as $sport): ?>
              <div class="box">
                <label class="labelexpanded">
                    <img src="img/sport/<?= $sport['lien'] ?>" alt="">
                    <input class="input-btn" type="radio" value="<?= $sport['lien'] ?>" name="sport">
                </label>
              </div>
            <?php endforeach ?>
          </div>

          <div class="pictures hidden">
          <?php foreach ($AllBackground as $background): ?>
              <div class="box">
                <label class="labelexpanded">
                    <img src="img/background/<?= $background['lien'] ?>" alt="">
                    <input class="input-btn" type="radio" value="<?= $background['lien'] ?>" name="background">
                </label>
              </div>
          <?php endforeach ?>
          </div>

          <div class="shares hidden">
            <p>Merci d'avoir participer !</p>
            <button type="submit" name="submit" class="submit-btn" value="Confirm">J'AI FINI</button>
          </div>   
        </form>
        </div>
      </div>
    </div>
  </form>
    <script src="js/mobile.js"></script>
    <script src="js/js.js"></script>
  </body>
</html>
