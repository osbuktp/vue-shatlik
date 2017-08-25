<template>
    <div @click="toggleSidebar" class="hamburger hamburger--elastic" :class="{'is-active': activated}" type="button">
        <div class="hamburger-box">
            <div class="hamburger-inner"></div>
        </div>
    </div>
</template>

<script>
import EventBus from '../../EventBus.vue';
export default {
    data() {
        return {
            activated: false
        }
    },
    methods: {
        toggleSidebar() {
            EventBus.$emit('toggleSidebar');
        },
        toggleState() {
            this.activated = !this.activated;
        }
    },
    mounted() {
        EventBus.$on('toggleSidebar', this.toggleState);
    }
}
</script>


<style lang="scss" scoped>
$hamburger-padding-x: 4px !default;
$hamburger-padding-y: 8px !default;
$hamburger-layer-width: 32px !default;
$hamburger-layer-height: 4px !default;
$hamburger-layer-spacing: 6px !default;
$hamburger-layer-color: #ffc107 !default;
$hamburger-layer-border-radius: 4px !default;
$hamburger-hover-opacity: 1 !default;
$hamburger-hover-transition-duration: 0.15s !default;
$hamburger-hover-transition-timing-function: linear !default;

// To use CSS filters as the hover effect instead of opacity,
// set $hamburger-hover-use-filter as true and
// change the value of $hamburger-hover-filter accordingly.
$hamburger-hover-use-filter: false !default;
$hamburger-hover-filter: opacity(50%) !default;
.hamburger {
    @media (min-width: 900px) {
        display: none;
    };
    padding: $hamburger-padding-y $hamburger-padding-x;
    display: inline-block;
    position: absolute;
    top: 4px;
    right: 4px;
    cursor: pointer;
    z-index: 3;

    transition-property: opacity, filter;
    transition-duration: $hamburger-hover-transition-duration;
    transition-timing-function: $hamburger-hover-transition-timing-function; // Normalize (<button>)
    font: inherit;
    color: inherit;
    text-transform: none;
    background-color: transparent;
    border: 0;
    margin: 0;
    height: 24px;
    overflow: visible;

    &:hover {
        @if $hamburger-hover-use-filter==true {
            filter: $hamburger-hover-filter;
        }
        @else {
            opacity: $hamburger-hover-opacity;
        }
    }
}

.hamburger-box {
    width: $hamburger-layer-width;
    height: $hamburger-layer-height * 3 + $hamburger-layer-spacing * 2;
    display: inline-block;
    position: relative;
}

.hamburger-inner {
    display: block;
    top: 50%;
    margin-top: $hamburger-layer-height / -2;

    &,
    &::before,
    &::after {
        width: $hamburger-layer-width;
        height: $hamburger-layer-height;
        background-color: $hamburger-layer-color;
        border-radius: $hamburger-layer-border-radius;
        position: absolute;
        transition-property: transform;
        transition-duration: 0.15s;
        transition-timing-function: ease;
    }

    &::before,
    &::after {
        content: "";
        display: block;
    }

    &::before {
        top: ($hamburger-layer-spacing + $hamburger-layer-height) * -1;
    }

    &::after {
        bottom: ($hamburger-layer-spacing + $hamburger-layer-height) * -1;
    }
}

.hamburger--elastic {
    .hamburger-inner {
        top: $hamburger-layer-height / 2;
        transition-duration: 0.275s;
        transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);

        &::before {
            top: $hamburger-layer-height + $hamburger-layer-spacing;
            transition: opacity 0.125s 0.275s ease;
        }

        &::after {
            top: ($hamburger-layer-height * 2) + ($hamburger-layer-spacing * 2);
            transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
    }

    &.is-active {
        .hamburger-inner {
            $y-offset: $hamburger-layer-spacing + $hamburger-layer-height;

            transform: translate3d(0, $y-offset, 0) rotate(135deg);
            transition-delay: 0.075s;

            &::before {
                transition-delay: 0s;
                opacity: 0;
            }

            &::after {
                transform: translate3d(0, $y-offset * -2, 0) rotate(-270deg);
                transition-delay: 0.075s;
            }
        }
    }
}
</style>

