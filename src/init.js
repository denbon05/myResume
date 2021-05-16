import i18next from 'i18next';
import initView from './view';
import resources from './locales';

const initLng = async (lng = 'en') => {
  const i18n = i18next.createInstance();
  return i18n.init({
    lng,
    resources,
  });
};

export default async () => {
  const elements = {
    fullName: document.getElementById('fullName'),
    personInfo: document.getElementById('personInfo'),
    profileMainTitle: document.getElementById('profile'),
    profileInfo: document.getElementById('profileInfo'),
    workMainTitle: document.getElementById('work'),
    workExp: document.getElementById('workExp'),
    educationMainTitle: document.getElementById('education'),
    educationContainer: document.getElementById('educationContainer'),
    skillsMainTitle: document.getElementById('skills'),
    skillsContainer: document.getElementById('skillsInfo'),
    languagesMainTitle: document.getElementById('languages'),
    languagesContainer: document.getElementById('languagesInfo'),
    achievementsMainTitle: document.getElementById('achievements'),
    projectsMainTitle: document.getElementById('projects'),
    projectsContainer: document.getElementById('projectsContainer'),
  };

  const t = await initLng();

  initView(elements, t);
};
