import {
  ButtonSmallIcon,
  ButtonGenerate,
  InputText
  /*   ProgressBar */
} from '../../components';
import './style.css';

export function Password() {
  return (
    <div className="container-password">
      <InputText></InputText>
      <div className="container-password-option">
        <ButtonSmallIcon></ButtonSmallIcon>
        <ButtonGenerate></ButtonGenerate>
      </div>
      {/*   <ProgressBar></ProgressBar> */}
    </div>
  );
}
