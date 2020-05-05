(function($) {
  var CheckboxDropdown = function(el) {
    var _this = this;
    this.isOpen = false;
    this.areAllChecked = false;
    this.$el = $(el);
    this.$label = this.$el.find(".vf-dropdown-label");
    this.$list = this.$el.find(".vf-dropdown-list .vf-dropdown-list-item");

    this.$inputs = this.$el.find('[type="checkbox"]');

    if (this.$inputs.length) {
      this.type = "checkbox";

      this.$inputs.on("change", function(e) {
        _this.onCheckBox();
      });
    } else {
      this.type = "click";

      $(this.$list).click(function(event) {
        $(this).siblings().removeClass("checked");
        $(this).addClass("checked");
        _this.onCheckBox();
        _this.toggleOpen(); //Close

      });
    }

    this.onCheckBox();

    this.$label.on("click", function(e) {
      e.preventDefault();
      _this.toggleOpen();
    });
  };

  CheckboxDropdown.prototype.onCheckBox = function() {
    this.updateStatus();
  };

  CheckboxDropdown.prototype.updateStatus = function() {
    var checked = "";

    if (this.type === "checkbox") {
      checked = this.$el.find(":checked");
    } else if (this.type === "click") {
      checked = this.$el.find(".checked");
    }

    var checkedArray = [];

    checked.each(function(i) {
      checkedArray.push($(this).attr("value"));
    });

    this.$el.attr("data-selected", checkedArray.join());

    this.areAllChecked = false;

    if (checked.length <= 0) {
      this.$label.html("Select option");
    } else if (checked.length === 1) {
      if (this.type === "checkbox") {
        this.selected = checked.next("label").text();
        this.$label.html(this.selected);
      } else if (this.type === "click") {
        this.selected = checked.find("label").text();
        this.$label.html(this.selected);
      }
    } else if (checked.length === this.$inputs.length) {
      this.$label.html("All Selected");
      this.areAllChecked = true;
    } else {
      this.$label.html(checked.length + " Selected");
    }
  };

  CheckboxDropdown.prototype.toggleOpen = function(forceOpen) {
    var _this = this;

    if (!this.isOpen || forceOpen) {
      this.isOpen = true;
      this.$el.addClass("on");
      $(document).on("click", function(e) {
        if (!$(e.target).closest("[data-control]").length) {
          _this.toggleOpen();
        }
      });
    } else {
      this.isOpen = false;
      this.$el.removeClass("on");
      $(document).off("click");
    }
  };

  var checkboxesDropdowns = document.querySelectorAll(
    '[data-control="vf-dropdown-data"]'
  );
  for (var i = 0, length = checkboxesDropdowns.length; i < length; i++) {
    new CheckboxDropdown(checkboxesDropdowns[i]);
  }
})(jQuery);
