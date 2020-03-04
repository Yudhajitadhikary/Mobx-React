import { action, runInAction, observable } from 'mobx';

class ImageStore {
  id = 1;

  @observable
  imageUrl = `https://picsum.photos/id/250/200/300`;

  @action async fetchImage() {
    const characterId = ++this.id;
    const response = await fetch(
      `https://picsum.photos/id/250/200/${characterId}`
    );
    const data = await response.json();

    runInAction(() => {
      this.imageUrl = data.image;
    });
  }
}

const imageStore = new ImageStore();

export default imageStore;
