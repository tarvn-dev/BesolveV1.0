import {
  IonPage,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonList,
  IonItem,
  IonInput,
  IonItemDivider,
  IonLabel,
  IonToggle,
  IonIcon
} from '@ionic/react';
import React, { useContext } from 'react';
import {auth} from '../firebase';
import { moon } from "ionicons/icons";
import { UserContext } from '../auth';
import setting from '../Images/setting.svg';
import "../theme/setting.css";

const toggleDarkModeHandler = () => {
  document.body.classList.toggle("dark");
};



const SettingsPage: React.FC = () => {
  const username = useContext(UserContext);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <img src={setting} alt="setting.svg" />
        <IonList>
          <br/><div className="inf">User Information</div><br/>
            <IonItem>
              <IonLabel><b>Username:</b> {username}</IonLabel>
              {/* <IonInput type="text"></IonInput> */}
            </IonItem>

          <IonItem>
            <IonLabel><b>E-mail:</b></IonLabel>
            {/* <IonInput type="text"></IonInput> */}
          </IonItem>

          <IonItem>
            <IonLabel><b>University:</b></IonLabel>
            {/* <IonInput type="text"></IonInput> */}
          </IonItem>

          <IonItem>
            <IonIcon slot="start" icon={moon} />
            <IonLabel>Dark Mode</IonLabel>
            <IonToggle slot="end" onIonChange={toggleDarkModeHandler} />
          </IonItem><br/>

          </IonList> 
        <IonButton color="dark" expand="block"
        onClick={()=> auth.signOut()} routerLink="/besolve">Logout</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default SettingsPage;
