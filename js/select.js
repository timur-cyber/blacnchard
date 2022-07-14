const element = document.querySelector('select');
      const choices = new Choices(element, {
        searchEnabled: false,
        placeholder: true,
        placeholderValue: 'Материал',
        removeItemButton: true,
        shouldSort: false,
        itemSelectText: '',
      });
      
      element.closest('.choices').querySelector('div[data-id="1"]').setAttribute('data-id', '666');
      // element.closest('.choices').querySelector('div[data-id="1"]').style.display = 'none';
